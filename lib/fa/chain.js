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

var FaChain = function (_React$Component) {
    _inherits(FaChain, _React$Component);

    function FaChain() {
        _classCallCheck(this, FaChain);

        return _possibleConstructorReturn(this, (FaChain.__proto__ || Object.getPrototypeOf(FaChain)).apply(this, arguments));
    }

    _createClass(FaChain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34 27.1q0-0.8-0.6-1.5l-4.7-4.6q-0.6-0.6-1.5-0.6-0.9 0-1.6 0.7 0.1 0 0.4 0.4t0.5 0.5 0.3 0.4 0.3 0.6 0.1 0.6q0 0.9-0.6 1.5t-1.5 0.6q-0.4 0-0.6-0.1t-0.6-0.3-0.4-0.3-0.5-0.5-0.4-0.4q-0.8 0.7-0.8 1.6 0 0.9 0.7 1.6l4.6 4.6q0.6 0.6 1.5 0.6 0.9 0 1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5z m-15.7-15.7q0-0.9-0.6-1.5l-4.6-4.6q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l4.6 4.7q0.6 0.6 1.5 0.6 1 0 1.6-0.7 0-0.1-0.4-0.4t-0.5-0.5-0.3-0.4-0.3-0.6-0.1-0.6q0-0.9 0.7-1.5t1.5-0.7q0.3 0 0.6 0.1t0.6 0.3 0.4 0.3 0.5 0.5 0.4 0.4q0.7-0.7 0.7-1.6z m20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6q-1.8-1.9-1.8-4.6t1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z' })
                )
            );
        }
    }]);

    return FaChain;
}(React.Component);

exports.default = FaChain;
module.exports = exports['default'];