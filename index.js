(function() {
    var WidgetPlugin = function(elementId) {
        // Constructor function to initialize the plugin
        this.triggerElement = document.getElementById(elementId);
        this.widgetContainer = document.getElementById('widget-container');

        // Event listener to open the widget when the trigger element is clicked
        this.triggerElement.addEventListener('click', this.openWidget.bind(this));
    };

    WidgetPlugin.prototype.openWidget = function() {
        // Function to open the widget above the specified element
        var widget = document.createElement('div');
        widget.innerHTML = 'Your widget content goes here';
        widget.style.position = 'absolute';
        widget.style.top = (this.triggerElement.offsetTop + this.triggerElement.offsetHeight) + 'px';
        widget.style.left = this.triggerElement.offsetLeft + 'px';
        widget.style.background = '#fff';
        widget.style.border = '1px solid #ccc';
        widget.style.padding = '10px';
        widget.style.zIndex = '999';

        this.widgetContainer.appendChild(widget);
    };

    // Initialize the plugin on window load
    window.onload = function() {
        var widget = new WidgetPlugin('widget-trigger');
    };
})();