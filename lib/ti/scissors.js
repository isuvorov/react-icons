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

var TiScissors = function (_React$Component) {
    _inherits(TiScissors, _React$Component);

    function TiScissors() {
        _classCallCheck(this, TiScissors);

        return _possibleConstructorReturn(this, (TiScissors.__proto__ || Object.getPrototypeOf(TiScissors)).apply(this, arguments));
    }

    _createClass(TiScissors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 9.2c-1.7-2.5-4.9-2.8-7.4-1.4l-0.3 0.2c0 0 0 0-0.1 0-1.7 0-3.3 0.8-4.3 2.3 0 0-0.1 0-0.1 0-0.7 1.1-1.2 2.1-1.7 3.1-0.4 0.8-0.8 1.6-1.3 2.4-0.6-0.8-1-1.6-1.4-2.4-0.5-1-1-2-1.7-3.1 0 0 0 0 0 0-1-1.5-2.6-2.3-4.4-2.3-2.9 0-5.3 2.4-5.3 5.3 0 2.9 2.4 5.2 5.3 5.2 1.3 0 2.5-0.4 3.5-1.3l1.1 2c-2.7 3.2-5 6.8-5 6.9-2.1 2.8 1.1 7.4 1.3 7.5 0.1 0.3 0.4 0.4 0.6 0.4 0.4 0 0.6-0.2 0.8-0.4l5.2-9.6 5.2 9.6c0.1 0.2 0.3 0.4 0.6 0.4 0.3 0 0.6-0.1 0.8-0.4 0.1-0.1 3.3-4.7 1.3-7.5l-0.5-0.8c-1.8-2.9-2-3.2-4.6-6.1l1.1-2c1 0.9 2.2 1.3 3.5 1.3 2.9 0 5.3-2.3 5.3-5.2 0-1.1-0.3-2.1-0.9-3 0.8-0.4 1.6-0.2 2.4 0.2 0.8 0.3 1.5-0.7 1-1.3z m-22.7 5.8c-1 0-1.7-0.7-1.7-1.7s0.7-1.6 1.7-1.6 1.6 0.7 1.6 1.6-0.7 1.7-1.6 1.7z m7.5 5.7c-0.5 0-0.9-0.4-0.9-0.9 0-0.4 0.4-0.8 0.9-0.8s0.8 0.4 0.8 0.8c0 0.5-0.4 0.9-0.8 0.9z m7.5-5.7c-1 0-1.7-0.7-1.7-1.7s0.7-1.6 1.7-1.6 1.6 0.7 1.6 1.6-0.7 1.7-1.6 1.7z' })
                )
            );
        }
    }]);

    return TiScissors;
}(React.Component);

exports.default = TiScissors;
module.exports = exports['default'];