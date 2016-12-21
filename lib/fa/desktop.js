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

var FaDesktop = function (_React$Component) {
    _inherits(FaDesktop, _React$Component);

    function FaDesktop() {
        _classCallCheck(this, FaDesktop);

        return _possibleConstructorReturn(this, (FaDesktop.__proto__ || Object.getPrototypeOf(FaDesktop)).apply(this, arguments));
    }

    _createClass(FaDesktop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.2 22v-17.3q0-0.3-0.2-0.4t-0.5-0.2h-33.2q-0.2 0-0.4 0.2t-0.2 0.4v17.3q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5z m2.7-17.3v22.6q0 1.4-1 2.4t-2.4 0.9h-11.3q0 0.8 0.4 1.6t0.6 1.5 0.4 0.9q0 0.6-0.4 1t-1 0.3h-10.6q-0.5 0-0.9-0.3t-0.4-1q0-0.3 0.3-0.9t0.7-1.5 0.3-1.6h-11.3q-1.3 0-2.3-0.9t-1-2.4v-22.6q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z' })
                )
            );
        }
    }]);

    return FaDesktop;
}(React.Component);

exports.default = FaDesktop;
module.exports = exports['default'];