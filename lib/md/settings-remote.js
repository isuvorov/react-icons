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

var MdSettingsRemote = function (_React$Component) {
    _inherits(MdSettingsRemote, _React$Component);

    function MdSettingsRemote() {
        _classCallCheck(this, MdSettingsRemote);

        return _possibleConstructorReturn(this, (MdSettingsRemote.__proto__ || Object.getPrototypeOf(MdSettingsRemote)).apply(this, arguments));
    }

    _createClass(MdSettingsRemote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0c5.1 0 9.7 2 13 5.4l-2.4 2.3c-2.7-2.7-6.5-4.3-10.6-4.3s-7.9 1.6-10.6 4.3l-2.4-2.3c3.3-3.3 7.9-5.4 13-5.4z m-8.3 10.1c2.1-2.1 5.1-3.5 8.3-3.5s6.2 1.4 8.3 3.5l-2.4 2.3c-1.4-1.5-3.6-2.4-5.9-2.4s-4.5 0.9-5.9 2.4z m8.3 14.9c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.2-3.4-3.2-3.4 1.4-3.4 3.2 1.6 3.4 3.4 3.4z m5-10c0.9 0 1.6 0.7 1.6 1.6v20c0 1-0.7 1.8-1.6 1.8h-10c-0.9 0-1.6-0.8-1.6-1.8v-20c0-0.9 0.7-1.6 1.6-1.6h10z' })
                )
            );
        }
    }]);

    return MdSettingsRemote;
}(React.Component);

exports.default = MdSettingsRemote;
module.exports = exports['default'];