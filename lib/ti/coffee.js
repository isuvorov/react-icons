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

var TiCoffee = function (_React$Component) {
    _inherits(TiCoffee, _React$Component);

    function TiCoffee() {
        _classCallCheck(this, TiCoffee);

        return _possibleConstructorReturn(this, (TiCoffee.__proto__ || Object.getPrototypeOf(TiCoffee)).apply(this, arguments));
    }

    _createClass(TiCoffee, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.3 31.7h-20c-0.9 0-1.6-0.8-1.6-1.7s0.7-1.7 1.6-1.7h20c1 0 1.7 0.8 1.7 1.7s-0.7 1.7-1.7 1.7z m0.9-23.4h-20.9v15c0 1.9 1.5 3.4 3.4 3.4h13.3c1.8 0 3.3-1.5 3.3-3.4v-3.3h0.9c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.9-5.8-5.9z m-4.2 15h-13.3v-11.6h13.3v11.6z m4.2-6.6h-2.5v-5h2.5c1.3 0 2.5 1.1 2.5 2.5s-1.2 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiCoffee;
}(React.Component);

exports.default = TiCoffee;
module.exports = exports['default'];