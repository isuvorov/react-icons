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

var MdTimerOff = function (_React$Component) {
    _inherits(MdTimerOff, _React$Component);

    function MdTimerOff() {
        _classCallCheck(this, MdTimerOff);

        return _possibleConstructorReturn(this, (MdTimerOff.__proto__ || Object.getPrototypeOf(MdTimerOff)).apply(this, arguments));
    }

    _createClass(MdTimerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4c2.1 0 4.1-0.7 5.9-1.7l-16-15.9c-1 1.7-1.5 3.7-1.5 5.8 0 6.5 5.1 11.8 11.6 11.8z m-15-26.8l29.6 29.7-2.1 2.1-4.2-4.3c-2.4 1.6-5.3 2.5-8.3 2.5-8.3 0-15-6.7-15-15 0-3 0.9-5.9 2.5-8.2l-4.6-4.6z m13.4 9.1v-2.3h3.2v5.7z m6.6-14.1v3.4h-10v-3.4h10z m6.7 6l2.4 2.3-2.4 2.4c2.1 2.6 3.3 5.8 3.3 9.3 0 3.1-0.9 6-2.5 8.3l-2.4-2.4c1-1.7 1.5-3.7 1.5-5.9 0-6.4-5.1-11.6-11.6-11.6-2.1 0-4.1 0.5-5.8 1.6l-2.5-2.5c2.4-1.5 5.3-2.5 8.3-2.5 3.5 0 6.8 1.3 9.4 3.3z' })
                )
            );
        }
    }]);

    return MdTimerOff;
}(React.Component);

exports.default = MdTimerOff;
module.exports = exports['default'];