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

var FaFastForward = function (_React$Component) {
    _inherits(FaFastForward, _React$Component);

    function FaFastForward() {
        _classCallCheck(this, FaFastForward);

        return _possibleConstructorReturn(this, (FaFastForward.__proto__ || Object.getPrototypeOf(FaFastForward)).apply(this, arguments));
    }

    _createClass(FaFastForward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm1 36.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-32.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.1 0.2 0.2 0.4v-15.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.2 0.2 0.3 0.4v-15.1q0-0.6 0.4-1t1-0.4h2.9q0.5 0 1 0.4t0.4 1v31.4q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-15.1q-0.1 0.2-0.3 0.4l-15.9 15.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-15.8q-0.1 0.2-0.2 0.4z' })
                )
            );
        }
    }]);

    return FaFastForward;
}(React.Component);

exports.default = FaFastForward;
module.exports = exports['default'];