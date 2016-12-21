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

var FaPinterestSquare = function (_React$Component) {
    _inherits(FaPinterestSquare, _React$Component);

    function FaPinterestSquare() {
        _classCallCheck(this, FaPinterestSquare);

        return _possibleConstructorReturn(this, (FaPinterestSquare.__proto__ || Object.getPrototypeOf(FaPinterestSquare)).apply(this, arguments));
    }

    _createClass(FaPinterestSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-16.2q1.9-2.7 2.4-4.6 0.2-0.8 1.2-4.7 0.4 0.9 1.6 1.5t2.5 0.6q4.1 0 6.6-3.3t2.6-8.3q0-1.9-0.8-3.6t-2.2-3.1-3.4-2.2-4.4-0.8q-2.3 0-4.3 0.6t-3.4 1.7-2.4 2.5-1.5 2.8-0.5 3q0 2.3 0.9 4t2.6 2.4q0.3 0.2 0.5 0t0.3-0.4q0.3-1 0.4-1.3 0.1-0.5-0.3-1-1.1-1.4-1.1-3.3 0-3.4 2.3-5.8t6.1-2.3q3.3 0 5.2 1.8t1.8 4.7q0 3.7-1.5 6.4t-3.9 2.6q-1.3 0-2.1-1t-0.5-2.3q0.1-0.8 0.6-2.1t0.6-2.2 0.3-1.7q0-1.1-0.6-1.8t-1.7-0.7q-1.4 0-2.3 1.2t-1 3.1q0 1.6 0.6 2.7l-2.2 9.3q-0.6 2.2-0.2 5.6h-4.1q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z' })
                )
            );
        }
    }]);

    return FaPinterestSquare;
}(React.Component);

exports.default = FaPinterestSquare;
module.exports = exports['default'];