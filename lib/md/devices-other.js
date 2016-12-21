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

var MdDevicesOther = function (_React$Component) {
    _inherits(MdDevicesOther, _React$Component);

    function MdDevicesOther() {
        _classCallCheck(this, MdDevicesOther);

        return _possibleConstructorReturn(this, (MdDevicesOther.__proto__ || Object.getPrototypeOf(MdDevicesOther)).apply(this, arguments));
    }

    _createClass(MdDevicesOther, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 30v-13.4h-6.6v13.4h6.6z m1.6-16.6c0.9 0 1.8 0.7 1.8 1.6v16.6c0 0.9-0.9 1.8-1.8 1.8h-10c-0.8 0-1.6-0.9-1.6-1.8v-16.6c0-0.9 0.8-1.6 1.6-1.6h10z m-18.2 15.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m3.2-9.1v3c1.1 0.9 1.8 2.2 1.8 3.6s-0.7 2.9-1.8 3.8v3h-6.6v-3c-1-0.9-1.6-2.3-1.6-3.8s0.6-2.7 1.6-3.6v-3h6.6z m-16.6-10v20h6.6v3.4h-6.6c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.4 3.4-3.4h30v3.4h-30z' })
                )
            );
        }
    }]);

    return MdDevicesOther;
}(React.Component);

exports.default = MdDevicesOther;
module.exports = exports['default'];