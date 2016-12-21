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

var TiArrowShuffle = function (_React$Component) {
    _inherits(TiArrowShuffle, _React$Component);

    function TiArrowShuffle() {
        _classCallCheck(this, TiArrowShuffle);

        return _possibleConstructorReturn(this, (TiArrowShuffle.__proto__ || Object.getPrototypeOf(TiArrowShuffle)).apply(this, arguments));
    }

    _createClass(TiArrowShuffle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.7 15h5.8c1.2 0 2.3 0.7 3.1 1.7 0.5-1 1.2-2 2-2.8-1.4-1.4-3.1-2.2-5.1-2.2h-5.8c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7z m12.8 5.2c0.9-2.8 3.7-5.2 6.1-5.2h3l-2.1 2.2c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.3 0.7 0.5 1.1 0.5s0.9-0.2 1.2-0.5l6.2-6.2-6.2-6.1c-0.6-0.7-1.7-0.7-2.3 0s-0.7 1.7 0 2.3l2.1 2.2h-3c-3.8 0-7.9 3.2-9.3 7.4l-0.8 2.4c-1 3.2-3.4 5.2-4.7 5.2h-4.1c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h4.1c3.1 0 6.5-3.2 7.9-7.5l0.8-2.3z m7 2c-0.7 0.6-0.7 1.7 0 2.3l2.1 2.2h-3.9c-2.1 0-3.9-1.5-4.5-3.5-0.4 1.2-1 2.5-1.8 3.6 1.5 1.9 3.8 3.2 6.3 3.2h3.9l-2.1 2.2c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.3 0.7 0.5 1.1 0.5s0.9-0.2 1.2-0.5l6.2-6.2-6.2-6.1c-0.6-0.7-1.7-0.7-2.3 0z' })
                )
            );
        }
    }]);

    return TiArrowShuffle;
}(React.Component);

exports.default = TiArrowShuffle;
module.exports = exports['default'];