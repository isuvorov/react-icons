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

var MdSettingsVoice = function (_React$Component) {
    _inherits(MdSettingsVoice, _React$Component);

    function MdSettingsVoice() {
        _classCallCheck(this, MdSettingsVoice);

        return _possibleConstructorReturn(this, (MdSettingsVoice.__proto__ || Object.getPrototypeOf(MdSettingsVoice)).apply(this, arguments));
    }

    _createClass(MdSettingsVoice, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 16.6c0 5.7-4.5 10.5-10 11.3v5.5h-3.2v-5.5c-5.5-0.8-10-5.6-10-11.3h2.8c0 5 4.2 8.6 8.8 8.6s8.8-3.6 8.8-8.6h2.8z m-6.6 23.4v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.2v3.4h-3.2z m1.6-18.4c-2.7 0-5-2.2-5-5v-10c0-2.7 2.3-5 5-5s5 2.3 5 5v10c0 2.8-2.3 5-5 5z m-8.4 18.4v-3.4h3.4v3.4h-3.4z' })
                )
            );
        }
    }]);

    return MdSettingsVoice;
}(React.Component);

exports.default = MdSettingsVoice;
module.exports = exports['default'];