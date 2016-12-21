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

var MdRotateRight = function (_React$Component) {
    _inherits(MdRotateRight, _React$Component);

    function MdRotateRight() {
        _classCallCheck(this, MdRotateRight);

        return _possibleConstructorReturn(this, (MdRotateRight.__proto__ || Object.getPrototypeOf(MdRotateRight)).apply(this, arguments));
    }

    _createClass(MdRotateRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.1 25.8c1-1.3 1.5-2.7 1.7-4.2h3.4c-0.3 2.4-1.2 4.6-2.7 6.5z m-6.5 4c1.5-0.2 2.9-0.7 4.2-1.7l2.4 2.4c-1.9 1.5-4.2 2.4-6.6 2.7v-3.4z m11.6-11.4h-3.4c-0.2-1.5-0.7-2.9-1.7-4.2l2.4-2.3c1.5 1.9 2.4 4.1 2.7 6.5z m-7.3-9.2l-7.5 7.4v-6.4c-4.8 0.7-8.4 4.9-8.4 9.8s3.6 9.1 8.4 9.8v3.4c-6.6-0.8-11.8-6.4-11.8-13.2s5.2-12.4 11.8-13.2v-5.2z' })
                )
            );
        }
    }]);

    return MdRotateRight;
}(React.Component);

exports.default = MdRotateRight;
module.exports = exports['default'];