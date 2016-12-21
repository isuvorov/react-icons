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

var FaScribd = function (_React$Component) {
    _inherits(FaScribd, _React$Component);

    function FaScribd() {
        _classCallCheck(this, FaScribd);

        return _possibleConstructorReturn(this, (FaScribd.__proto__ || Object.getPrototypeOf(FaScribd)).apply(this, arguments));
    }

    _createClass(FaScribd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.5 34.6q0 2-1.4 3.4t-3.4 1.4-3.5-1.4-1.4-3.4q0-2 1.4-3.4t3.5-1.5 3.4 1.5 1.4 3.4z m-5.2-6.3q-2.6 0.3-4.3 2.3t-1.7 4.6q0 1.6 0.7 3.1-3.3 1.7-8.5 1.7-2.4 0-4.5-0.5t-3.4-1.2-2.4-1.7-1.7-1.9-1-1.8-0.6-1.5-0.1-0.9q0-0.4 0.1-1t0.4-1.2 0.8-1.3 1.5-1 2.1-0.4 2.1 0.4 1.4 0.9 0.8 1.2 0.4 1.1 0 0.8q0 0.7-0.5 1.8 0.7 0.6 1.9 0.9t2 0.4l0.9 0q2.6 0 4.3-1.1t1.6-3q0-0.6-0.2-1.1t-0.7-1-1.1-0.9-1.6-1-2.1-1-2.7-1.3l-0.9-0.4q-2.6-1.3-4.2-2.3t-2.7-2.3-1.6-2.8-0.5-3.6q0-1.7 0.5-3.3t1.4-3.1 2.5-2.5 3.8-1.8 4.9-0.6q2.7 0 4.9 0.6t3.7 1.5 2.4 2.1 1.5 2.3 0.4 2.3q0 1.1-0.4 1.9t-0.8 1.3-1.1 0.8-1 0.4-0.9 0.1h-0.9l-0.9-0.1-1-0.3-0.9-0.6-0.8-1.1-0.5-1.5-0.3-2.2q-0.3-0.4-1.3-0.6t-1.8-0.2l-0.8 0q-1.5 0-2.6 0.7t-1.6 1.5-0.5 1.7q0 0.6 0.1 1t0.6 1 1.2 1.2 2.1 1.1 3.4 1.4q1.7 0.5 3.1 1.1t2.4 1.3 1.8 1.3 1.4 1.3 0.9 1.4 0.6 1.4 0.3 1.4 0.2 1.4 0 1.4z' })
                )
            );
        }
    }]);

    return FaScribd;
}(React.Component);

exports.default = FaScribd;
module.exports = exports['default'];