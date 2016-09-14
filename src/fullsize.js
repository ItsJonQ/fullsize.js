;(function(window, document, undefined) {
  'use strict';

  var FullSize = function(query) {
    // Default Attributes
    this.attributes = {};

    var el = document.querySelector(query);
    // A DOM element is required
    if (el && el.nodeType && el.nodeType === 1) {
      this.el = el;
      this.initialize();
    }
    else {
      return;
    }
  };

  FullSize.prototype.initialize = function() {
    // Set the initial attributes
    this.attributes.width = this.el.clientWidth;
    this.attributes.height = this.el.clientHeight;
    this.renderContainer();
  };

  FullSize.prototype.renderContainer = function() {
    // Create + set the container
    this.container = document.createElement('div');
    // Append the container to the DOM
    this.el.parentNode.insertBefore(this.container, this.el);
    // Append the element inside the container
    this.container.appendChild(this.el);
    return this;
  };


  window.FullSize = FullSize;

  return FullSize;

})(window, document);
