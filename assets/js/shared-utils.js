/**
 * Shared utilities for search, filtering, toggles, and GitHub integration.
 * Used by blogs.html, publications.html, and talks.html layouts.
 */

const SharedUtils = {
    /**
     * Initialize search/filter functionality for a list.
     * @param {Object} config - Configuration object
     * @param {string} config.searchInputId - ID of the search input element
     * @param {string} config.listId - ID of the list container
     * @param {string} config.itemSelector - CSS selector for list items
     * @param {string} config.noResultsId - ID of the no-results message element
     * @param {string} config.resultsCountId - ID of the results count element
     * @param {string[]} config.searchFields - Array of data attribute names to search
     * @param {string} config.itemType - Type name for display (e.g., "blogs", "publications")
     * @param {string} [config.tagFilterId] - Optional ID of tag filter dropdown
     */
    initSearch: function(config) {
        const searchInput = document.getElementById(config.searchInputId);
        const list = document.getElementById(config.listId);
        const items = document.querySelectorAll(config.itemSelector);
        const noResults = document.getElementById(config.noResultsId);
        const resultsCount = document.getElementById(config.resultsCountId);
        const tagFilter = config.tagFilterId ? document.getElementById(config.tagFilterId) : null;
        const totalCount = items.length;

        function updateResults() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const selectedTag = tagFilter ? tagFilter.value.toLowerCase().trim() : '';
            let visibleCount = 0;

            items.forEach(item => {
                let matches = true;

                // Check search term against all specified fields
                if (searchTerm) {
                    matches = config.searchFields.some(field => {
                        const value = item.getAttribute('data-' + field) || '';
                        return value.includes(searchTerm);
                    });
                }

                // Check tag filter
                if (matches && selectedTag) {
                    const tags = item.getAttribute('data-tags') || '';
                    matches = tags.includes(selectedTag);
                }

                if (matches) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Update results count
            if (resultsCount) {
                if (searchTerm || selectedTag) {
                    resultsCount.textContent = `Showing ${visibleCount} of ${totalCount} ${config.itemType}`;
                } else {
                    resultsCount.textContent = '';
                }
            }

            // Show/hide no results message
            if (visibleCount === 0 && (searchTerm || selectedTag)) {
                list.style.display = 'none';
                if (noResults) noResults.style.display = 'block';
            } else {
                list.style.display = 'block';
                if (noResults) noResults.style.display = 'none';
            }
        }

        searchInput.addEventListener('input', updateResults);
        if (tagFilter) {
            tagFilter.addEventListener('change', updateResults);
        }

        // Initialize on load
        updateResults();
    },

    /**
     * Initialize toggle buttons (TLDR, Citation, etc.)
     * @param {string} toggleSelector - CSS selector for toggle buttons
     */
    initToggles: function(toggleSelector) {
        document.querySelectorAll(toggleSelector).forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const card = this.closest('.pub-card') || this.closest('.talk-card') || this.closest('.list-group-item');
                const dynamicContent = card.querySelector('.dynamic-content');
                const visibleElement = dynamicContent.querySelector('#' + targetId + '-visible');

                if (visibleElement) {
                    visibleElement.remove();
                    this.classList.remove('active');
                    this.textContent = this.textContent.replace(' ✓', '');
                } else {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const clonedElement = targetElement.cloneNode(true);
                        clonedElement.style.display = 'block';
                        clonedElement.id = targetId + '-visible';
                        dynamicContent.appendChild(clonedElement);
                        this.classList.add('active');
                        this.textContent = this.textContent + ' ✓';
                    }
                }
            });
        });
    },

    /**
     * Initialize copy-to-clipboard functionality
     * @param {string} buttonSelector - CSS selector for copy buttons
     * @param {string} dataAttribute - Data attribute containing the text to copy
     */
    initCopyButtons: function(buttonSelector, dataAttribute) {
        document.querySelectorAll(buttonSelector).forEach(button => {
            button.addEventListener('click', function() {
                const text = this.getAttribute(dataAttribute);
                navigator.clipboard.writeText(text).then(() => {
                    const icon = this.querySelector('i');
                    if (icon) {
                        const originalClass = icon.className;
                        icon.className = 'fas fa-check';
                        setTimeout(() => {
                            icon.className = originalClass;
                        }, 2000);
                    }
                });
            });
        });
    },

    /**
     * Fetch and display GitHub star counts
     * @param {string} linkSelector - CSS selector for GitHub links
     */
    fetchGitHubStars: function(linkSelector) {
        document.querySelectorAll(linkSelector).forEach(link => {
            const repo = link.getAttribute('data-repo');
            if (repo) {
                fetch(`https://api.github.com/repos/${repo}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('GitHub API rate limit or repo not found');
                        }
                        return response.json();
                    })
                    .then(data => {
                        const starCount = link.querySelector('.star-count');
                        if (starCount && data.stargazers_count !== undefined) {
                            starCount.textContent = `★ ${data.stargazers_count}`;
                        }
                    })
                    .catch(error => {
                        // Silently fail - just show default star icon
                        const starCount = link.querySelector('.star-count');
                        if (starCount) {
                            starCount.textContent = '★';
                        }
                    });
            }
        });
    },

    /**
     * Populate a tag filter dropdown from a comma-separated string
     * @param {string} filterId - ID of the select element
     * @param {string} tagsString - Comma-separated string of tags
     */
    populateTagFilter: function(filterId, tagsString) {
        const tagFilter = document.getElementById(filterId);
        if (!tagFilter || !tagsString) return;

        const allTags = tagsString.split(',').filter(tag => tag.trim() !== '').sort();
        const uniqueTags = [...new Set(allTags)];

        uniqueTags.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag.trim();
            option.textContent = tag.trim();
            tagFilter.appendChild(option);
        });
    }
};
