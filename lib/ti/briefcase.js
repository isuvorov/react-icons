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

var TiBriefcase = function (_React$Component) {
    _inherits(TiBriefcase, _React$Component);

    function TiBriefcase() {
        _classCallCheck(this, TiBriefcase);

        return _possibleConstructorReturn(this, (TiBriefcase.__proto__ || Object.getPrototypeOf(TiBriefcase)).apply(this, arguments));
    }

    _createClass(TiBriefcase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 11.7c0-2.8-2.2-5-5-5h-10c-2.8 0-5 2.2-5 5-2.8 0-5 2.2-5 5v11.6c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-11.6c0-2.8-2.2-5-5-5z m-15-1.7h10c0.9 0 1.7 0.7 1.7 1.7h-13.4c0-1 0.8-1.7 1.7-1.7z m16.7 18.3c0 1-0.8 1.7-1.7 1.7h-20c-0.9 0-1.7-0.7-1.7-1.7v-1.6h23.4v1.6z m-23.4-3.3v-8.3c0-0.9 0.8-1.7 1.7-1.7h20c0.9 0 1.7 0.7 1.7 1.7v8.3h-23.4z m13.4-5h-3.4c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.6 1.6 1.6h3.4c0.9 0 1.6-0.7 1.6-1.6s-0.7-1.7-1.6-1.7z' })
                )
            );
        }
    }]);

    return TiBriefcase;
}(React.Component);

exports.default = TiBriefcase;
module.exports = exports['default'];