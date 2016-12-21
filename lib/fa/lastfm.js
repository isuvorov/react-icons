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

var FaLastfm = function (_React$Component) {
    _inherits(FaLastfm, _React$Component);

    function FaLastfm() {
        _classCallCheck(this, FaLastfm);

        return _possibleConstructorReturn(this, (FaLastfm.__proto__ || Object.getPrototypeOf(FaLastfm)).apply(this, arguments));
    }

    _createClass(FaLastfm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 15.7q0 0.1 0.3 0.9 0.2 0.7 0.5 1.1t0.9 0.8 1 0.4 1.2 0.4q7.3 2 7.3 7.4 0 3.3-2.4 5.4t-5.6 2.2q-1.4 0-2.5-0.4t-2.1-1-1.7-1.7-1.4-2-1.2-2.3-1-2.3-0.8-2.3-0.8-2.2q-0.7-1.8-1.4-2.9t-1.6-2.2-2.4-1.4-3.1-0.5q-2.2 0-4.1 1.3t-3.1 3.2-1.1 4.1q0 3.6 2.3 6.3t5.9 2.6q4 0 5.8-2.1 1.2-1.4 1.8-2.6l1.9 3.4q-0.3 0.8-1 1.6l0 0q-2.9 3.4-8.6 3.4-3.3 0-6-1.8t-4.3-4.6-1.5-6.1q0-2.4 1-4.6t2.6-4 3.8-2.7 4.6-1q1.9 0 3.5 0.4t2.8 1.1 2.1 1.8 1.6 2.2 1.3 2.6 1.1 2.8 1.2 2.9 1.2 2.9q2.1 4.4 5.2 4.4 1.8 0 3.1-1.1t1.3-2.8q0-1-0.5-1.6t-1.1-1.1-1.6-0.7-1.9-0.6-1.9-0.7-1.9-1.2-1.4-1.8-0.9-2.8q0-0.3 0-0.7 0-2.4 1.9-4.3t4.4-1.7q1.8 0.1 2.7 0.3t2 1.2h0q0.3 0.2 0.5 0.5t0.6 0.9 0.4 0.6l-2.8 2.2q-0.6-1.1-1.2-1.6v0q-0.6-0.5-2.2-0.5-1.1 0-1.9 0.8t-0.8 1.8z' })
                )
            );
        }
    }]);

    return FaLastfm;
}(React.Component);

exports.default = FaLastfm;
module.exports = exports['default'];