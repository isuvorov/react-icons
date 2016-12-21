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

var GoSync = function (_React$Component) {
    _inherits(GoSync, _React$Component);

    function GoSync() {
        _classCallCheck(this, GoSync);

        return _possibleConstructorReturn(this, (GoSync.__proto__ || Object.getPrototypeOf(GoSync)).apply(this, arguments));
    }

    _createClass(GoSync, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 18.5c0.5 3.2-0.5 6.5-3 9-3.7 3.6-9.4 4.1-13.5 1.4l2.9-2.9-10.7-1.5 1.5 10.5 3.2-3.1c5.9 4.3 14.3 3.9 19.6-1.4 3.1-3.1 4.6-7.1 4.4-11.1l-4.4-0.9z m-18.2-6c3.7-3.6 9.4-4.1 13.5-1.3l-2.9 2.8 10.8 1.5-1.5-10.5-3.3 3.2c-5.9-4.4-14.3-4-19.6 1.3-3.1 3.1-4.6 7.1-4.4 11.1l4.4 0.9c-0.5-3.2 0.5-6.5 3-9z' })
                )
            );
        }
    }]);

    return GoSync;
}(React.Component);

exports.default = GoSync;
module.exports = exports['default'];