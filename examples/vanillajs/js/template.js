/*jshint laxbreak:true */
(function (window) {
	'use strict';

	/**
	 * Creates an <li> HTML string and returns it for placement in your app.
	 *	 *
	 * @param {object} data The object containing keys you want to find in the
	 *                      template to replace.
	 * @returns {string} HTML String of an <li> element
	 *
	 * @example
	 * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 *	completed: 0,
	 * });
	 */
	Template.prototype.show = function (data) {
		return L.render(data.map(function (item) {
			return L.li({
					"data-id": item.id,
					"class": item.completed ? "completed" : null,
				},
					L.div({"class": "view"}, [
						L.input({
							"class": "toggle",
							"type": "checkbox",
							checked: item.completed
						}),
						L.label(item.title),
						L.button({"class": "destroy"})
					])
			)
		}));
	};

	/**
	 * Displays a counter of how many to dos are left to complete
	 *
	 * @param {number} activeTodos The number of active todos.
	 * @returns {string} String containing the count
	 */
	Template.prototype.itemCounter = function (activeTodos) {
		var plural = activeTodos === 1 ? '' : 's';

		return L.render([
			L.strong(activeTodos),
			' item' + plural + ' left',
		]);
	};

	/**
	 * Updates the text within the "Clear completed" button
	 *
	 * @param  {[type]} completedTodos The number of completed todos.
	 * @returns {string} String containing the count
	 */
	Template.prototype.clearCompletedButton = function (completedTodos) {
		if (completedTodos > 0) {
			return 'Clear completed';
		} else {
			return '';
		}
	};

	// Export to window
	window.app = window.app || {};
	window.app.Template = Template;
})(window);
