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

var GoLaw = function (_React$Component) {
    _inherits(GoLaw, _React$Component);

    function GoLaw() {
        _classCallCheck(this, GoLaw);

        return _possibleConstructorReturn(this, (GoLaw.__proto__ || Object.getPrototypeOf(GoLaw)).apply(this, arguments));
    }

    _createClass(GoLaw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.1 7.5c1.3 0 2.4-1.1 2.4-2.4 0-1.5-1.1-2.6-2.6-2.6-1.3 0-2.4 1.1-2.4 2.4 0 1.5 1.1 2.6 2.6 2.6z m18.1 15h-0.7l-5-9.6c0.7-0.1 1.4-0.4 2.1-0.6 0.9-0.5 1.1-1.7 0.4-2.5l0 0c-0.5-0.4-1.1-0.6-1.7-0.3-0.6 0.2-1.3 0.5-2.1 0.5-2.2 0-3.2-2.5-11.2-2.5s-9 2.5-11.2 2.5c-0.8 0-1.5-0.2-2.1-0.5-0.6-0.2-1.2-0.1-1.7 0.3l0 0c-0.7 0.8-0.5 2 0.4 2.5 0.7 0.3 1.4 0.5 2.1 0.6l-5 9.6h-0.7c-0.3 0-0.5 0.3-0.5 0.6 0.4 2.5 3.6 4.4 7.4 4.4s7.1-1.9 7.5-4.4c0-0.3-0.2-0.6-0.5-0.6h-0.7l-5-9.6c3.3-0.2 5-1.9 7.5-1.9v19c-1.4 0-2.5 1.1-2.5 2.5h-2.8c-1.1 0-2.2 1.1-2.2 2.5h20c0-1.4-1.1-2.5-2.8-2.5h-2.2c0-1.4-1.1-2.5-2.5-2.5v-19c2.5 0 4.2 1.7 7.5 1.9l-5 9.6h-0.7c-0.3 0-0.5 0.3-0.5 0.6 0.4 2.5 3.6 4.4 7.4 4.4s7.1-1.9 7.5-4.4c0-0.3-0.2-0.6-0.5-0.6z m-25.7 0h-7.5l3.8-7 3.7 7z m15 0l3.8-7 3.7 7h-7.5z' })
                )
            );
        }
    }]);

    return GoLaw;
}(React.Component);

exports.default = GoLaw;
module.exports = exports['default'];