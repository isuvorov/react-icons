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

var FaSpoon = function (_React$Component) {
    _inherits(FaSpoon, _React$Component);

    function FaSpoon() {
        _classCallCheck(this, FaSpoon);

        return _possibleConstructorReturn(this, (FaSpoon.__proto__ || Object.getPrototypeOf(FaSpoon)).apply(this, arguments));
    }

    _createClass(FaSpoon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 0.6-0.4 1t-1 0.4h-4.3q-0.6 0-1-0.4t-0.3-1l1-18.4q-2.1-0.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4 3.6-1.8 3.5 1.8 2.7 4.4 0.9 5.6z' })
                )
            );
        }
    }]);

    return FaSpoon;
}(React.Component);

exports.default = FaSpoon;
module.exports = exports['default'];