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

var FaPlusSquareO = function (_React$Component) {
    _inherits(FaPlusSquareO, _React$Component);

    function FaPlusSquareO() {
        _classCallCheck(this, FaPlusSquareO);

        return _possibleConstructorReturn(this, (FaPlusSquareO.__proto__ || Object.getPrototypeOf(FaPlusSquareO)).apply(this, arguments));
    }

    _createClass(FaPlusSquareO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.2 17.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-7.9v7.9q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-7.9h-7.9q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.4 0.2-0.6t0.5-0.2h7.9v-7.8q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5v7.8h7.9q0.3 0 0.5 0.2t0.2 0.6z m2.9 10v-18.6q0-1.5-1.1-2.5t-2.5-1.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5z m2.8-18.6v18.6q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q2.7 0 4.5 1.8t1.9 4.6z' })
                )
            );
        }
    }]);

    return FaPlusSquareO;
}(React.Component);

exports.default = FaPlusSquareO;
module.exports = exports['default'];