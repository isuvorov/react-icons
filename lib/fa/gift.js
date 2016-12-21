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

var FaGift = function (_React$Component) {
    _inherits(FaGift, _React$Component);

    function FaGift() {
        _classCallCheck(this, FaGift);

        return _possibleConstructorReturn(this, (FaGift.__proto__ || Object.getPrototypeOf(FaGift)).apply(this, arguments));
    }

    _createClass(FaGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.7 30.3v-16h-7.1v16q0 0.5 0.4 0.8t1 0.3h4.3q0.6 0 1-0.3t0.4-0.8z m-10.2-18.9h4.4l-2.8-3.6q-0.6-0.7-1.6-0.7-0.9 0-1.5 0.7t-0.6 1.5 0.6 1.5 1.5 0.6z m15.4-2.1q0-0.9-0.6-1.5t-1.6-0.7q-0.9 0-1.5 0.7l-2.8 3.6h4.4q0.8 0 1.5-0.6t0.6-1.5z m8.4 5.7v7.1q0 0.4-0.2 0.6t-0.5 0.2h-2.2v9.2q0 0.9-0.6 1.6t-1.5 0.6h-24.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-2.2q-0.3 0-0.5-0.2t-0.2-0.6v-7.1q0-0.3 0.2-0.5t0.5-0.2h9.8q-2 0-3.5-1.5t-1.5-3.5 1.5-3.6 3.5-1.4q2.4 0 3.8 1.7l2.8 3.7 2.9-3.7q1.4-1.7 3.8-1.7 2 0 3.5 1.4t1.4 3.6-1.4 3.5-3.6 1.5h9.9q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaGift;
}(React.Component);

exports.default = FaGift;
module.exports = exports['default'];