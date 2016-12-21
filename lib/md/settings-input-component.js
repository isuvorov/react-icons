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

var MdSettingsInputComponent = function (_React$Component) {
    _inherits(MdSettingsInputComponent, _React$Component);

    function MdSettingsInputComponent() {
        _classCallCheck(this, MdSettingsInputComponent);

        return _possibleConstructorReturn(this, (MdSettingsInputComponent.__proto__ || Object.getPrototypeOf(MdSettingsInputComponent)).apply(this, arguments));
    }

    _createClass(MdSettingsInputComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 26.6v-3.2h10v3.2q0 1.7-1 2.9t-2.4 1.8v7.1h-3.4v-7.1q-3.2-1.1-3.2-4.7z m-6.8-23.2v6.6h3.4v10h-10v-10h3.4v-6.6q0-0.7 0.4-1.3t1.2-0.5 1.2 0.5 0.4 1.3z m13.4 6.6h3.4v10h-10v-10h3.2v-6.6q0-0.7 0.5-1.3t1.3-0.5 1.1 0.5 0.5 1.3v6.6z m-33.4 16.6v-3.2h10v3.2q0 3.6-3.2 4.7v7.1h-3.4v-7.1q-1.5-0.5-2.4-1.8t-1-2.9z m13.4 0v-3.2h10v3.2q0 1.7-0.9 2.9t-2.5 1.8v7.1h-3.2v-7.1q-1.5-0.5-2.5-1.8t-0.9-2.9z m-6.6-23.2v6.6h3.2v10h-10v-10h3.4v-6.6q0-0.7 0.5-1.3t1.1-0.5 1.3 0.5 0.5 1.3z' })
                )
            );
        }
    }]);

    return MdSettingsInputComponent;
}(React.Component);

exports.default = MdSettingsInputComponent;
module.exports = exports['default'];