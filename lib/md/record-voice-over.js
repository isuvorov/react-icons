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

var MdRecordVoiceOver = function (_React$Component) {
    _inherits(MdRecordVoiceOver, _React$Component);

    function MdRecordVoiceOver() {
        _classCallCheck(this, MdRecordVoiceOver);

        return _possibleConstructorReturn(this, (MdRecordVoiceOver.__proto__ || Object.getPrototypeOf(MdRecordVoiceOver)).apply(this, arguments));
    }

    _createClass(MdRecordVoiceOver, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 3.4q4.9 5 4.9 11.7t-4.9 11.5l-2.7-2.6q3.4-4 3.4-9.1t-3.4-8.9z m-5.4 5.5q2.5 2.7 2.5 6.2t-2.5 5.9l-2.8-2.8q1-1.5 1-3.2t-1-3.3z m-13 16.1q4.2 0 8.8 1.8t4.6 4.8v3.4h-26.8v-3.4q0-2.9 4.6-4.8t8.8-1.8z m-6.6-10q0-2.7 1.9-4.7t4.7-1.9 4.7 1.9 1.9 4.7-1.9 4.7-4.7 1.9-4.7-1.9-1.9-4.7z' })
                )
            );
        }
    }]);

    return MdRecordVoiceOver;
}(React.Component);

exports.default = MdRecordVoiceOver;
module.exports = exports['default'];