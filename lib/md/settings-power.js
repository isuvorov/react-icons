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

var MdSettingsPower = function (_React$Component) {
    _inherits(MdSettingsPower, _React$Component);

    function MdSettingsPower() {
        _classCallCheck(this, MdSettingsPower);

        return _possibleConstructorReturn(this, (MdSettingsPower.__proto__ || Object.getPrototypeOf(MdSettingsPower)).apply(this, arguments));
    }

    _createClass(MdSettingsPower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 40v-3.4h3.4v3.4h-3.4z m2.6-32.6c3.4 2.4 5.8 6.4 5.8 11 0 7.3-6.1 13.2-13.4 13.2s-13.4-5.9-13.4-13.2c0-4.6 2.4-8.6 5.8-11l2.4 2.4c-2.9 1.8-4.8 5-4.8 8.6 0 5.5 4.5 10 10 10s10-4.5 10-10c0-3.6-2-6.8-4.8-8.6z m-6-4v16.6h-3.2v-16.6h3.2z m-3.2 36.6v-3.4h3.2v3.4h-3.2z m-6.8 0v-3.4h3.4v3.4h-3.4z' })
                )
            );
        }
    }]);

    return MdSettingsPower;
}(React.Component);

exports.default = MdSettingsPower;
module.exports = exports['default'];