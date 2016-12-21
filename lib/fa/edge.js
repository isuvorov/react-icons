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

var FaEdge = function (_React$Component) {
    _inherits(FaEdge, _React$Component);

    function FaEdge() {
        _classCallCheck(this, FaEdge);

        return _possibleConstructorReturn(this, (FaEdge.__proto__ || Object.getPrototypeOf(FaEdge)).apply(this, arguments));
    }

    _createClass(FaEdge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm1.5 17.7h0.1q0.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2h-25.2q0.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8 0.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 0.9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-0.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q0.2-1.7-0.1-3.1t-1.1-2.3-1.6-1.5-1.8-0.9-1.6-0.5-1.3-0.1l-0.5-0.1q-3 0.1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z' })
                )
            );
        }
    }]);

    return FaEdge;
}(React.Component);

exports.default = FaEdge;
module.exports = exports['default'];