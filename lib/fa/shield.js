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

var FaShield = function (_React$Component) {
    _inherits(FaShield, _React$Component);

    function FaShield() {
        _classCallCheck(this, FaShield);

        return _possibleConstructorReturn(this, (FaShield.__proto__ || Object.getPrototypeOf(FaShield)).apply(this, arguments));
    }

    _createClass(FaShield, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.8 21.4v-14.3h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1z m4.3-17.1v17.1q0 2-0.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-0.9 0.4q-0.3 0.1-0.6 0.1t-0.6-0.1q-0.4-0.2-0.9-0.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-0.7-3.8v-17.1q0-0.6 0.4-1t1-0.4h25.7q0.6 0 1 0.4t0.5 1z' })
                )
            );
        }
    }]);

    return FaShield;
}(React.Component);

exports.default = FaShield;
module.exports = exports['default'];