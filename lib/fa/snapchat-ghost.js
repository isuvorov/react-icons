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

var FaSnapchatGhost = function (_React$Component) {
    _inherits(FaSnapchatGhost, _React$Component);

    function FaSnapchatGhost() {
        _classCallCheck(this, FaSnapchatGhost);

        return _possibleConstructorReturn(this, (FaSnapchatGhost.__proto__ || Object.getPrototypeOf(FaSnapchatGhost)).apply(this, arguments));
    }

    _createClass(FaSnapchatGhost, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.4 2.9q3-0.1 5.4 1.5t3.6 4.3q0.7 1.3 0.7 4 0 1-0.2 4.2 0.3 0.2 0.6 0.2 0.4 0 1.1-0.3t1.2-0.3q0.6 0 1.2 0.4t0.6 1q0 0.7-0.7 1.2t-1.5 0.7-1.6 0.7-0.7 1q0 0.4 0.3 1 0.8 1.8 2.3 3.3t3.2 2.3q0.6 0.3 1.8 0.5 0.6 0.1 0.6 0.8 0 1.6-4.9 2.3-0.1 0.2-0.2 0.9t-0.3 1-0.8 0.4q-0.4 0-1.4-0.1t-1.4-0.2q-0.8 0-1.4 0.1-0.7 0.1-1.4 0.5t-1.3 0.9-1.3 0.9-1.7 0.7-2.2 0.3q-1.1 0-2.1-0.3t-1.7-0.7-1.3-0.9-1.3-0.9-1.4-0.5q-0.5-0.1-1.4-0.1-0.5 0-1.4 0.2t-1.3 0.2q-0.6 0-0.8-0.5t-0.3-1-0.3-0.9q-4.9-0.7-4.9-2.3 0-0.7 0.7-0.8 1.1-0.2 1.7-0.5 1.8-0.7 3.3-2.3t2.3-3.3q0.2-0.6 0.2-1 0-0.6-0.7-1t-1.5-0.7-1.6-0.7-0.7-1.2q0-0.6 0.6-1t1.2-0.4q0.4 0 1.1 0.3t1.2 0.3q0.4 0 0.7-0.2-0.2-3.1-0.2-4.2 0-2.7 0.6-4 1.4-3.1 3.8-4.4t5.9-1.4z' })
                )
            );
        }
    }]);

    return FaSnapchatGhost;
}(React.Component);

exports.default = FaSnapchatGhost;
module.exports = exports['default'];