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

var GoListOrdered = function (_React$Component) {
    _inherits(GoListOrdered, _React$Component);

    function GoListOrdered() {
        _classCallCheck(this, GoListOrdered);

        return _possibleConstructorReturn(this, (GoListOrdered.__proto__ || Object.getPrototypeOf(GoListOrdered)).apply(this, arguments));
    }

    _createClass(GoListOrdered, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 22.5h17.5v-5h-17.5v5z m0 10h17.5v-5h-17.5v5z m0-25v5h17.5v-5h-17.5z m-9.4 10h3v-10h-1.4l-3.3 0.9v2l1.7-0.1v7.2z m4.3 8c0-1.4-0.5-3-3.8-3-1.3 0-2.5 0.2-3.2 0.6l0 2.6c0.9-0.4 1.7-0.6 2.6-0.6s1.3 0.4 1.3 1.1c0 1-1.2 2.3-4.3 4.4v1.9h7.5v-2.6l-3.6 0.1c2-1.2 3.4-2.6 3.4-4.4l0.1-0.1z' })
                )
            );
        }
    }]);

    return GoListOrdered;
}(React.Component);

exports.default = GoListOrdered;
module.exports = exports['default'];