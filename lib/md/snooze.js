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

var MdSnooze = function (_React$Component) {
    _inherits(MdSnooze, _React$Component);

    function MdSnooze() {
        _classCallCheck(this, MdSnooze);

        return _possibleConstructorReturn(this, (MdSnooze.__proto__ || Object.getPrototypeOf(MdSnooze)).apply(this, arguments));
    }

    _createClass(MdSnooze, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 18.4v-3.4h10v3l-6 7h6v3.4h-10v-3.1l6-6.9h-6z m5 15c6.5 0 11.6-5.3 11.6-11.8s-5.1-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.1 11.8 11.6 11.8z m0-26.8c8.3 0 15 6.8 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z m16.6 2.9l-2.1 2.6-7.6-6.5 2.1-2.5z m-23.5-3.9l-7.6 6.4-2.1-2.5 7.6-6.4z' })
                )
            );
        }
    }]);

    return MdSnooze;
}(React.Component);

exports.default = MdSnooze;
module.exports = exports['default'];