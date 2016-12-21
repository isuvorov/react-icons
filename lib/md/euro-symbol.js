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

var MdEuroSymbol = function (_React$Component) {
    _inherits(MdEuroSymbol, _React$Component);

    function MdEuroSymbol() {
        _classCallCheck(this, MdEuroSymbol);

        return _possibleConstructorReturn(this, (MdEuroSymbol.__proto__ || Object.getPrototypeOf(MdEuroSymbol)).apply(this, arguments));
    }

    _createClass(MdEuroSymbol, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 30.9c2.7 0 5.2-1.1 7-2.7l3 3c-2.7 2.4-6.2 3.8-10 3.8-6.6 0-12.1-4.2-14.1-10h-5.9v-3.4h5.1c-0.1-0.5-0.1-1.1-0.1-1.6s0-1.1 0.1-1.6h-5.1v-3.4h5.9c2-5.8 7.5-10 14.1-10 3.8 0 7.3 1.4 10 3.8l-3 3c-1.8-1.6-4.3-2.7-7-2.7-4.1 0-7.8 2.5-9.6 5.9h9.6v3.4h-10.7c-0.1 0.5-0.2 1.1-0.2 1.6s0.1 1.1 0.2 1.6h10.7v3.4h-9.6c1.8 3.4 5.4 5.9 9.6 5.9z' })
                )
            );
        }
    }]);

    return MdEuroSymbol;
}(React.Component);

exports.default = MdEuroSymbol;
module.exports = exports['default'];