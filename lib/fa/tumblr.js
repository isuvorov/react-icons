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

var FaTumblr = function (_React$Component) {
    _inherits(FaTumblr, _React$Component);

    function FaTumblr() {
        _classCallCheck(this, FaTumblr);

        return _possibleConstructorReturn(this, (FaTumblr.__proto__ || Object.getPrototypeOf(FaTumblr)).apply(this, arguments));
    }

    _createClass(FaTumblr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 29.7l1.8 5.3q-0.6 0.7-2.5 1.4t-4 0.7q-2.3 0.1-4.2-0.5t-3.2-1.7-2.1-2.4-1.3-2.6-0.3-2.7v-12.1h-3.8v-4.8q1.6-0.6 2.9-1.6t2-2 1.3-2.2 0.8-2.3 0.3-1.9q0-0.1 0.1-0.2t0.2-0.1h5.4v9.5h7.5v5.6h-7.5v11.5q0 0.7 0.2 1.3t0.5 1.2 1.1 0.9 1.8 0.3q1.7 0 3-0.6z' })
                )
            );
        }
    }]);

    return FaTumblr;
}(React.Component);

exports.default = FaTumblr;
module.exports = exports['default'];