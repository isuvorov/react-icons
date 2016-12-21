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

var MdSpeakerPhone = function (_React$Component) {
    _inherits(MdSpeakerPhone, _React$Component);

    function MdSpeakerPhone() {
        _classCallCheck(this, MdSpeakerPhone);

        return _possibleConstructorReturn(this, (MdSpeakerPhone.__proto__ || Object.getPrototypeOf(MdSpeakerPhone)).apply(this, arguments));
    }

    _createClass(MdSpeakerPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 33.4v-13.4h-10v13.4h10z m-0.2-16.7c1 0 1.8 0.9 1.8 1.9v16.2c0 1-0.8 1.8-1.8 1.8h-9.6c-1 0-1.8-0.8-1.8-1.8v-16.2c0-1 0.8-2 1.8-2z m-4.8-15.1c5 0 9.6 2.2 12.9 5.4l-2.4 2.4c-2.7-2.8-6.4-4.4-10.5-4.4s-7.8 1.6-10.5 4.4l-2.4-2.4c3.3-3.3 7.9-5.4 12.9-5.4z m-8.4 10.2c2.2-2.1 5.1-3.4 8.4-3.4s6.3 1.3 8.4 3.4l-2.5 2.3c-1.4-1.4-3.6-2.4-5.9-2.4s-4.5 1-5.9 2.4z' })
                )
            );
        }
    }]);

    return MdSpeakerPhone;
}(React.Component);

exports.default = MdSpeakerPhone;
module.exports = exports['default'];