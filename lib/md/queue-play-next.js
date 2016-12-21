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

var MdQueuePlayNext = function (_React$Component) {
    _inherits(MdQueuePlayNext, _React$Component);

    function MdQueuePlayNext() {
        _classCallCheck(this, MdQueuePlayNext);

        return _possibleConstructorReturn(this, (MdQueuePlayNext.__proto__ || Object.getPrototypeOf(MdQueuePlayNext)).apply(this, arguments));
    }

    _createClass(MdQueuePlayNext, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 30l-7.5 7.5-2.5-2.5 5-5-5-5 2.5-2.5z m-18.4-13.4h5v3.4h-5v5h-3.2v-5h-5v-3.4h5v-5h3.2v5z m13.4-11.6q1.3 0 2.3 1t1.1 2.4v13.2h-3.4v-13.2h-30v20h25v3.2h-3.4v3.4h-13.2v-3.4h-8.4q-1.4 0-2.4-0.9t-1-2.3v-20q0-1.4 1-2.4t2.4-1h30z' })
                )
            );
        }
    }]);

    return MdQueuePlayNext;
}(React.Component);

exports.default = MdQueuePlayNext;
module.exports = exports['default'];