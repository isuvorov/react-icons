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

var TiCalculator = function (_React$Component) {
    _inherits(TiCalculator, _React$Component);

    function TiCalculator() {
        _classCallCheck(this, TiCalculator);

        return _possibleConstructorReturn(this, (TiCalculator.__proto__ || Object.getPrototypeOf(TiCalculator)).apply(this, arguments));
    }

    _createClass(TiCalculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 35h-13.3c-2.8 0-5-2.2-5-5v-20c0-2.8 2.2-5 5-5h13.3c2.8 0 5 2.2 5 5v20c0 2.8-2.2 5-5 5z m-13.3-26.7c-0.9 0-1.7 0.8-1.7 1.7v20c0 0.9 0.8 1.7 1.7 1.7h13.3c1 0 1.7-0.8 1.7-1.7v-20c0-0.9-0.7-1.7-1.7-1.7h-13.3z m3.3 10c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m-10 5c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m-10 5c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m5 0c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7c0-0.9 0.7-1.6 1.7-1.6s1.6 0.7 1.6 1.6z m-1.6-16.6v1.6h-10v-1.6h10z m1.6-1.7h-13.3v5h13.3v-5z' })
                )
            );
        }
    }]);

    return TiCalculator;
}(React.Component);

exports.default = TiCalculator;
module.exports = exports['default'];