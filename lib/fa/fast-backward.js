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

var FaFastBackward = function (_React$Component) {
    _inherits(FaFastBackward, _React$Component);

    function FaFastBackward() {
        _classCallCheck(this, FaFastBackward);

        return _possibleConstructorReturn(this, (FaFastBackward.__proto__ || Object.getPrototypeOf(FaFastBackward)).apply(this, arguments));
    }

    _createClass(FaFastBackward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39 3.1q0.4-0.4 0.7-0.2t0.3 0.7v32.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.2-0.4v15.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.3-0.4v15.1q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v15.1q0.1-0.2 0.3-0.4l15.9-15.9q0.4-0.4 0.7-0.2t0.3 0.7v15.8q0-0.2 0.2-0.4z' })
                )
            );
        }
    }]);

    return FaFastBackward;
}(React.Component);

exports.default = FaFastBackward;
module.exports = exports['default'];