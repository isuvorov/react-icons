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

var MdVoicemail = function (_React$Component) {
    _inherits(MdVoicemail, _React$Component);

    function MdVoicemail() {
        _classCallCheck(this, MdVoicemail);

        return _possibleConstructorReturn(this, (MdVoicemail.__proto__ || Object.getPrototypeOf(MdVoicemail)).apply(this, arguments));
    }

    _createClass(MdVoicemail, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.9 25c3.2 0 5.7-2.7 5.7-5.9s-2.5-5.7-5.7-5.7-5.9 2.5-5.9 5.7 2.7 5.9 5.9 5.9z m-21.8 0c3.2 0 5.9-2.7 5.9-5.9s-2.7-5.7-5.9-5.7-5.7 2.5-5.7 5.7 2.5 5.9 5.7 5.9z m21.8-15c5 0 9.1 4.1 9.1 9.1s-4.1 9.3-9.1 9.3h-21.8c-5 0-9.1-4.2-9.1-9.3s4.1-9.1 9.1-9.1 9.3 4.1 9.3 9.1c0 2.2-0.8 4.3-2.1 5.9h7.5c-1.4-1.6-2.2-3.7-2.2-5.9 0-5 4.2-9.1 9.3-9.1z' })
                )
            );
        }
    }]);

    return MdVoicemail;
}(React.Component);

exports.default = MdVoicemail;
module.exports = exports['default'];