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

var MdSettingsInputAntenna = function (_React$Component) {
    _inherits(MdSettingsInputAntenna, _React$Component);

    function MdSettingsInputAntenna() {
        _classCallCheck(this, MdSettingsInputAntenna);

        return _possibleConstructorReturn(this, (MdSettingsInputAntenna.__proto__ || Object.getPrototypeOf(MdSettingsInputAntenna)).apply(this, arguments));
    }

    _createClass(MdSettingsInputAntenna, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 1.6q7.6 0 13 5.4t5.4 13h-3.4q0-6.3-4.4-10.6t-10.6-4.4-10.6 4.4-4.4 10.6h-3.4q0-7.6 5.4-13t13-5.4z m1.6 22.2v5.5l5.7 5.7-2.3 2.3-5-5-5 5-2.3-2.3 5.7-5.7v-5.5q-2.5-1-2.5-3.8 0-1.7 1.2-2.9t2.9-1.2 2.9 1.2 1.2 2.9q0 2.8-2.5 3.8z m-1.6-15.4q4.8 0 8.2 3.4t3.4 8.2h-3.2q0-3.4-2.5-5.9t-5.9-2.5-5.9 2.5-2.5 5.9h-3.2q0-4.8 3.4-8.2t8.2-3.4z' })
                )
            );
        }
    }]);

    return MdSettingsInputAntenna;
}(React.Component);

exports.default = MdSettingsInputAntenna;
module.exports = exports['default'];