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

var MdCardGiftcard = function (_React$Component) {
    _inherits(MdCardGiftcard, _React$Component);

    function MdCardGiftcard() {
        _classCallCheck(this, MdCardGiftcard);

        return _possibleConstructorReturn(this, (MdCardGiftcard.__proto__ || Object.getPrototypeOf(MdCardGiftcard)).apply(this, arguments));
    }

    _createClass(MdCardGiftcard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 23.4v-10h-8.6l3.6 4.6-2.8 2q-5-6.8-5.6-7.7-0.6 0.9-5.6 7.7l-2.8-2 3.6-4.6h-8.6v10h26.8z m0 8.2v-3.2h-26.8v3.2h26.8z m-18.4-25q-0.7 0-1.2 0.5t-0.4 1.3 0.4 1.1 1.2 0.5 1.2-0.5 0.4-1.1-0.4-1.3-1.2-0.5z m10 0q-0.7 0-1.2 0.5t-0.4 1.3 0.4 1.1 1.2 0.5 1.2-0.5 0.4-1.1-0.4-1.3-1.2-0.5z m8.4 3.4q1.4 0 2.3 1t0.9 2.4v18.2q0 1.4-0.9 2.4t-2.3 1h-26.8q-1.4 0-2.3-1t-0.9-2.4v-18.2q0-1.4 0.9-2.4t2.3-1h3.7q-0.3-1.1-0.3-1.6 0-2.1 1.5-3.6t3.5-1.4q2.6 0 4.1 2.1l0.9 1.2 0.9-1.2q1.5-2.1 4.1-2.1 2 0 3.5 1.4t1.5 3.6q0 0.5-0.3 1.6h3.7z' })
                )
            );
        }
    }]);

    return MdCardGiftcard;
}(React.Component);

exports.default = MdCardGiftcard;
module.exports = exports['default'];