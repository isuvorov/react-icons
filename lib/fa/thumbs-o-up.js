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

var FaThumbsOUp = function (_React$Component) {
    _inherits(FaThumbsOUp, _React$Component);

    function FaThumbsOUp() {
        _classCallCheck(this, FaThumbsOUp);

        return _possibleConstructorReturn(this, (FaThumbsOUp.__proto__ || Object.getPrototypeOf(FaThumbsOUp)).apply(this, arguments));
    }

    _createClass(FaThumbsOUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.7 30q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m25.7-12.9q0-1.1-0.8-2t-2-0.8h-7.9q0-1.3 1.1-3.6t1.1-3.6q0-2.1-0.8-3.2t-2.8-1q-0.6 0.5-0.9 1.9t-0.6 2.8-1.4 2.4q-0.5 0.5-1.7 2-0.1 0.1-0.5 0.7t-0.7 0.9-0.8 1-0.9 0.9-0.8 0.8-0.9 0.6-0.8 0.2h-0.7v14.3h0.7q0.3 0 0.7 0.1t0.7 0.1 0.9 0.3 0.8 0.2 0.7 0.3 0.7 0.3q4.7 1.6 7.6 1.6h2.7q4.3 0 4.3-3.7 0-0.6-0.1-1.3 0.7-0.3 1.1-1.2t0.4-1.6-0.4-1.5q1.1-1.2 1.1-2.7 0-0.6-0.2-1.2t-0.5-1.1q0.7 0 1.1-1t0.5-1.9z m2.9 0q0 2-1.1 3.7 0.2 0.7 0.2 1.5 0 1.7-0.9 3.2 0.1 0.5 0.1 1 0 2.2-1.3 3.9 0 3.2-1.9 4.9t-5.1 1.8h-2.9q-2.1 0-4.2-0.5t-4.8-1.4q-2.6-0.9-3.1-0.9h-6.4q-1.2 0-2.1-0.8t-0.8-2.1v-14.3q0-1.1 0.8-2t2.1-0.8h6.1q0.8-0.6 3-3.5 1.3-1.6 2.4-2.8 0.6-0.6 0.8-1.9t0.7-2.9 1.4-2.4q0.8-0.8 2-0.8 1.9 0 3.4 0.7t2.2 2.3 0.8 4.1q0 2.1-1.1 4.3h4q2.3 0 4 1.7t1.7 4z' })
                )
            );
        }
    }]);

    return FaThumbsOUp;
}(React.Component);

exports.default = FaThumbsOUp;
module.exports = exports['default'];