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

var IoGrid = function (_React$Component) {
    _inherits(IoGrid, _React$Component);

    function IoGrid() {
        _classCallCheck(this, IoGrid);

        return _possibleConstructorReturn(this, (IoGrid.__proto__ || Object.getPrototypeOf(IoGrid)).apply(this, arguments));
    }

    _createClass(IoGrid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 12c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m-20 10c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m-20 10c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z m10 0c0 0.3-0.2 0.5-0.5 0.5h-4c-0.3 0-0.5-0.2-0.5-0.5v-4c0-0.3 0.2-0.5 0.5-0.5h4c0.3 0 0.5 0.2 0.5 0.5v4z' })
                )
            );
        }
    }]);

    return IoGrid;
}(React.Component);

exports.default = IoGrid;
module.exports = exports['default'];