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

var FaCoffee = function (_React$Component) {
    _inherits(FaCoffee, _React$Component);

    function FaCoffee() {
        _classCallCheck(this, FaCoffee);

        return _possibleConstructorReturn(this, (FaCoffee.__proto__ || Object.getPrototypeOf(FaCoffee)).apply(this, arguments));
    }

    _createClass(FaCoffee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.2 14.4q0-1.7-1.2-2.9t-2.9-1.3h-1.4v8.4h1.4q1.7 0 2.9-1.2t1.2-3z m-36.2 16.8h39q0 2.3-1.6 3.9t-4 1.6h-27.8q-2.3 0-4-1.6t-1.6-3.9z m40.4-16.8q0 3.5-2.4 5.9t-5.9 2.5h-1.4v0.7q0 2-1.5 3.4t-3.4 1.5h-15.3q-2.1 0-3.5-1.5t-1.4-3.4v-16q0-0.6 0.4-1t1-0.4h25.1q3.4 0 5.9 2.4t2.4 5.9z' })
                )
            );
        }
    }]);

    return FaCoffee;
}(React.Component);

exports.default = FaCoffee;
module.exports = exports['default'];