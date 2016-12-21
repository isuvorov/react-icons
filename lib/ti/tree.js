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

var TiTree = function (_React$Component) {
    _inherits(TiTree, _React$Component);

    function TiTree() {
        _classCallCheck(this, TiTree);

        return _possibleConstructorReturn(this, (TiTree.__proto__ || Object.getPrototypeOf(TiTree)).apply(this, arguments));
    }

    _createClass(TiTree, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.6 29l-4.5-5.7h1.6c0.6 0 1.2-0.3 1.4-0.9s0.3-1.2-0.1-1.7l-11.6-16.7c-0.6-0.7-1.6-0.9-2.4-0.4-0.1 0.1-0.2 0.3-0.3 0.4-0.1 0-11.7 16.7-11.7 16.7-0.4 0.5-0.4 1.2-0.1 1.7 0.2 0.6 0.8 0.9 1.4 0.9h1.6l-4.5 5.7c-0.4 0.5-0.5 1.1-0.2 1.7 0.2 0.6 0.8 1 1.5 1h11.6v5c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-5h11.6c0.7 0 1.3-0.4 1.5-1 0.3-0.6 0.2-1.2-0.2-1.7z m-12.9-0.7v-8.3c0-0.9-0.8-1.7-1.7-1.7s-1.7 0.8-1.7 1.7v8.3h-8.2l4.5-5.6c0.4-0.5 0.5-1.2 0.2-1.8-0.2-0.5-0.8-0.9-1.5-0.9h-1.8l8.5-12.1 8.5 12.1h-1.8c-0.7 0-1.3 0.4-1.5 0.9-0.3 0.6-0.2 1.3 0.2 1.8l4.5 5.6h-8.2z' })
                )
            );
        }
    }]);

    return TiTree;
}(React.Component);

exports.default = TiTree;
module.exports = exports['default'];