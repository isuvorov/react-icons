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

var FaYelp = function (_React$Component) {
    _inherits(FaYelp, _React$Component);

    function FaYelp() {
        _classCallCheck(this, FaYelp);

        return _possibleConstructorReturn(this, (FaYelp.__proto__ || Object.getPrototypeOf(FaYelp)).apply(this, arguments));
    }

    _createClass(FaYelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.3 29.4v2.9q-0.1 6.5-0.2 6.8-0.2 0.7-1.1 0.9-1.2 0.2-4.1-0.9t-3.6-2q-0.3-0.3-0.4-0.8 0-0.2 0.1-0.5 0.1-0.3 0.8-1.1t4-4.8q0 0 1.4-1.6 0.3-0.4 0.8-0.5t1.1 0.1q0.6 0.2 0.9 0.6t0.3 0.9z m-3.4-5.6q0 1.3-1.1 1.6l-2.7 0.9q-6.1 1.9-6.5 1.9-0.8 0-1.2-0.8-0.3-0.5-0.4-1.6-0.2-1.7 0-3.8t0.7-2.7 1.2-0.8q0.3 0 4.5 1.8 1.6 0.6 2.6 1l1.9 0.8q0.5 0.2 0.8 0.7t0.2 1z m18.5 6.7q-0.2 1.2-2.1 3.6t-3 2.8q-0.8 0.3-1.4-0.2-0.3-0.2-4.1-6.4l-1.1-1.7q-0.3-0.5-0.2-1t0.4-1q0.8-1 1.9-0.6 0 0 2.6 0.9 4.6 1.4 5.4 1.8t1.1 0.4q0.6 0.5 0.5 1.4z m-15-14.1q0.1 2.2-1.2 2.7-1.3 0.4-2.6-1.6l-8.4-13.3q-0.2-0.8 0.4-1.4 0.9-1 4.6-2t5-0.7q0.9 0.2 1.1 1 0.1 0.4 0.5 6.8t0.6 8.5z m14.7 2.4q0.1 0.8-0.5 1.3-0.4 0.2-7.4 1.9-1.5 0.3-2 0.5l0 0q-0.5 0.1-1-0.1t-0.8-0.7q-0.7-1.1 0-2 0 0 1.6-2.2 2.8-3.9 3.4-4.6t0.7-0.9q0.7-0.4 1.5 0 1.1 0.5 2.7 3t1.8 3.7v0.1z' })
                )
            );
        }
    }]);

    return FaYelp;
}(React.Component);

exports.default = FaYelp;
module.exports = exports['default'];