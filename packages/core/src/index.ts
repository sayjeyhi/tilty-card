import { MouseEvent } from "react";

(function(selector) {
    const container = document.getElementById("container") as HTMLElement;
    const inner = document.querySelector(".beatiful-card") as HTMLDivElement;
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event: MouseEvent) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(el: HTMLElement) {
        this._x = el.offsetLeft + Math.floor(el.offsetWidth / 2);
        this._y = el.offsetTop + Math.floor(el.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
    var onMouseEnterHandler = function(event: MouseEvent) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      // @ts-ignore
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event: MouseEvent) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    var update = function(event: MouseEvent) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x: number | string, y: number | string) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
    };
  
    inner.onmousemove = onMouseMoveHandler;
    inner.onmouseleave = onMouseLeaveHandler;
    inner.onmouseenter = onMouseEnterHandler;
  })();