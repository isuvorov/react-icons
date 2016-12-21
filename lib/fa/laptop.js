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

var FaLaptop = function (_React$Component) {
    _inherits(FaLaptop, _React$Component);

    function FaLaptop() {
        _classCallCheck(this, FaLaptop);

        return _possibleConstructorReturn(this, (FaLaptop.__proto__ || Object.getPrototypeOf(FaLaptop)).apply(this, arguments));
    }

    _createClass(FaLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.6 28q-1.3 0-2.3-1t-1-2.3v-14.7q0-1.3 1-2.3t2.3-1h22.6q1.4 0 2.4 1t1 2.3v14.7q0 1.3-1 2.3t-2.4 1h-22.6z m-0.6-18v14.7q0 0.2 0.2 0.4t0.4 0.2h22.6q0.3 0 0.5-0.2t0.2-0.4v-14.7q0-0.2-0.2-0.4t-0.5-0.2h-22.6q-0.2 0-0.4 0.2t-0.2 0.4z m28.5 19.3h3.4v2q0 0.8-1 1.4t-2.4 0.6h-33.2q-1.3 0-2.3-0.6t-1-1.4v-2h36.5z m-14.9 2q0.3 0 0.3-0.3t-0.3-0.4h-3.3q-0.4 0-0.4 0.4t0.4 0.3h3.3z' })
                )
            );
        }
    }]);

    return FaLaptop;
}(React.Component);

exports.default = FaLaptop;
module.exports = exports['default'];