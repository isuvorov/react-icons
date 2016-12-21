'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoCircuitBoard = function (_React$Component) {
    _inherits(GoCircuitBoard, _React$Component);

    function GoCircuitBoard() {
        _classCallCheck(this, GoCircuitBoard);

        return _possibleConstructorReturn(this, (GoCircuitBoard.__proto__ || Object.getPrototypeOf(GoCircuitBoard)).apply(this, arguments));
    }

    _createClass(GoCircuitBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 10c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z m25 20c0 4.1-3.4 7.5-7.5 7.5h-17.5l7.5-7.5h3.2c0.8 1.5 2.5 2.5 4.3 2.5 2.8 0 5-2.2 5-5s-2.2-5-5-5c-1.9 0-3.5 1-4.3 2.5h-5.7l-11.4 11.4c-2.2-1.3-3.6-3.7-3.6-6.4v-20c0-4.1 3.4-7.5 7.5-7.5v5.7c-1.5 0.8-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5 1.8 0 3.5-1 4.3-2.5l6.4 0c0.8 1.5 2.5 2.5 4.3 2.5 2.8 0 5-2.2 5-5s-2.2-5-5-5c-1.9 0-3.5 1-4.3 2.5l-6.4 0c-0.4-0.8-1-1.4-1.8-1.8v-5.7h15c4.1 0 7.5 3.4 7.5 7.5v20z m-12.5-2.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5z m0-15c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5z' })
                )
            );
        }
    }]);

    return GoCircuitBoard;
}(React.Component);

exports.default = GoCircuitBoard;
module.exports = exports['default'];