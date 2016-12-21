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

var FaCertificate = function (_React$Component) {
    _inherits(FaCertificate, _React$Component);

    function FaCertificate() {
        _classCallCheck(this, FaCertificate);

        return _possibleConstructorReturn(this, (FaCertificate.__proto__ || Object.getPrototypeOf(FaCertificate)).apply(this, arguments));
    }

    _createClass(FaCertificate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.7 20l3.1 3q0.7 0.6 0.4 1.6-0.2 0.9-1.1 1.1l-4.2 1.1 1.2 4.1q0.2 1-0.5 1.6-0.6 0.7-1.5 0.4l-4.2-1.2-1 4.2q-0.3 0.9-1.2 1.2-0.3 0-0.4 0-0.7 0-1.1-0.4l-3.1-3.1-3 3.1q-0.6 0.6-1.5 0.4-0.9-0.2-1.2-1.2l-1-4.2-4.2 1.2q-0.9 0.3-1.6-0.4-0.7-0.6-0.4-1.6l1.2-4.1-4.2-1.1q-0.9-0.2-1.2-1.1-0.2-1 0.5-1.6l3.1-3-3.1-3q-0.7-0.6-0.5-1.6 0.3-0.9 1.2-1.1l4.2-1.1-1.2-4.1q-0.3-1 0.4-1.6 0.7-0.7 1.6-0.4l4.2 1.2 1-4.2q0.3-1 1.2-1.2 0.9-0.2 1.5 0.4l3 3.1 3.1-3.1q0.6-0.6 1.5-0.4 0.9 0.2 1.2 1.2l1 4.2 4.2-1.2q0.9-0.3 1.5 0.4 0.7 0.6 0.5 1.6l-1.2 4.1 4.2 1.1q0.9 0.2 1.1 1.1 0.3 1-0.4 1.6z' })
                )
            );
        }
    }]);

    return FaCertificate;
}(React.Component);

exports.default = FaCertificate;
module.exports = exports['default'];