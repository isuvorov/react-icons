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

var GoPlug = function (_React$Component) {
    _inherits(GoPlug, _React$Component);

    function GoPlug() {
        _classCallCheck(this, GoPlug);

        return _possibleConstructorReturn(this, (GoPlug.__proto__ || Object.getPrototypeOf(GoPlug)).apply(this, arguments));
    }

    _createClass(GoPlug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.2 8l0 0c-1-1-2.6-1-3.5 0l-1.8 1.7-3.6-3.5 1.8-1.8c1-0.9 1-2.5 0-3.5l0 0c-1-1-2.5-1-3.5 0l-1.9 1.9c-2.4-1.6-5.7-1.4-7.9 0.8l-0.9 0.9c-4.3 4.3-4.8 10.9-1.5 15.7l-0.2 0.2c-2.4 2.4-2.4 6.3 0 8.8 0.5 0.5 0.5 1.3 0 1.8s-1.3 0.4-1.8 0l-3.5-3.5c-2.4-2.5-6.4-2.5-8.8-0.1-2.5 2.5-2.5 6.4 0 8.9l0.3 0.3c1 1 2.5 1 3.5 0l0 0c1-1 1-2.6 0-3.5l-0.3-0.4c-0.5-0.4-0.5-1.2 0-1.7 0.5-0.5 1.3-0.5 1.8 0l3.4 3.4c2.5 2.5 6.5 2.5 9 0.1 2.4-2.5 2.4-6.4-0.1-8.8-0.5-0.5-0.5-1.3 0-1.8l0.2-0.2c4.8 3.3 11.4 2.8 15.7-1.5l0.9-1c2.2-2.1 2.4-5.4 0.8-7.8l1.9-1.9c1-1 1-2.5 0-3.5z m-4.4 11.5c-1.5 1.4-3.9 1.4-5.3 0l-8.9-8.9c-1.4-1.4-1.4-3.8 0-5.3 1.2-1.1 2.9-1.4 4.3-0.7l-1.6 1.6c-1 1-1 2.6 0 3.5l0 0.1c1 0.9 2.5 0.9 3.5 0l1.8-1.8 3.5 3.5-1.8 1.8c-0.9 1-0.9 2.5 0 3.5l0.1 0c0.9 1 2.5 1 3.5 0l1.6-1.6c0.7 1.4 0.4 3.1-0.7 4.3z' })
                )
            );
        }
    }]);

    return GoPlug;
}(React.Component);

exports.default = GoPlug;
module.exports = exports['default'];