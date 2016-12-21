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

var TiFlowParallel = function (_React$Component) {
    _inherits(TiFlowParallel, _React$Component);

    function TiFlowParallel() {
        _classCallCheck(this, TiFlowParallel);

        return _possibleConstructorReturn(this, (TiFlowParallel.__proto__ || Object.getPrototypeOf(TiFlowParallel)).apply(this, arguments));
    }

    _createClass(TiFlowParallel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 27v-14c1.9-0.7 3.3-2.5 3.3-4.7 0-2.7-2.2-5-5-5s-5 2.3-5 5c0 2.2 1.4 4 3.4 4.7v14c-2 0.7-3.4 2.5-3.4 4.7 0 2.7 2.3 5 5 5s5-2.3 5-5c0-2.2-1.4-4-3.3-4.7z m-1.7-20.3c1 0 1.7 0.7 1.7 1.6s-0.7 1.7-1.7 1.7-1.6-0.7-1.6-1.7 0.7-1.6 1.6-1.6z m0 26.6c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.7 1.6-1.7 1.7 0.7 1.7 1.7-0.7 1.6-1.7 1.6z m-11.6-25c0-2.7-2.3-5-5-5s-5 2.3-5 5c0 2.2 1.4 4 3.3 4.7v14c-1.9 0.7-3.3 2.5-3.3 4.7 0 2.7 2.2 5 5 5s5-2.3 5-5c0-2.2-1.4-4-3.4-4.7v-14c2-0.7 3.4-2.5 3.4-4.7z m-5-1.6c0.9 0 1.6 0.7 1.6 1.6s-0.7 1.7-1.6 1.7-1.7-0.7-1.7-1.7 0.7-1.6 1.7-1.6z m0 26.6c-1 0-1.7-0.7-1.7-1.6s0.7-1.7 1.7-1.7 1.6 0.7 1.6 1.7-0.7 1.6-1.6 1.6z' })
                )
            );
        }
    }]);

    return TiFlowParallel;
}(React.Component);

exports.default = TiFlowParallel;
module.exports = exports['default'];